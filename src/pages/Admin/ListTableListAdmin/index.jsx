/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Tooltip, Drawer,Avatar ,Typography} from 'antd';
import React, { useState, useRef } from 'react';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProDescriptions from '@ant-design/pro-descriptions';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryUser, updateUser, addUser, removeUser } from './service';
const { Paragraph } = Typography;
/**
 * 添加节点
 *
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    await addUser({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('正在配置');

  try {
    await updateUser({
      username: fields.username,
      access: fields.access,
      password: fields.password,
      id: fields.id,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 * 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeUser({
      id: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const [row, setRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const addcolumns = [
    {
      title:'头像url',
      dataIndex: 'avatar',
      
      render: (avatar) => <Avatar width={30} src={avatar} />
    },
    {
      title: '用户名',
      dataIndex: 'username',
      render: (dom, entity) => {
        return <a onClick={() => setRow(entity)}>{dom}</a>;
      },
      
    },
  
    {
      title: '密码',
      dataIndex: 'password',
      valueType: 'password',
    },
    {
      title: '权限组',
      dataIndex: 'access',
      valueType: 'text',
    },
  ]
  const columns = [
    /*{
      dataIndex: 'avatar',
      
      render: (avatar) => <Avatar width={30} src={avatar} />
    },*/
    {
      title: 'UID',
      dataIndex: 'uid',
      render: (dom, entity) => {
      return <a onClick={() => setRow(entity)}>{dom}</a>;
      },
      
    },

    {
      title: '用户名',
      dataIndex: 'name',
      render: (dom, entity) => {
      return <a onClick={() => setRow(entity)}>{dom}</a>;
      },
      
    },
    {
      title:'Email',
      dataIndex: 'email',
      valueType: 'textarea',
    },
    {
      title:'所属部门',
      dataIndex: 'department',
      valueType: 'textarea',
    },
    
    {
      title: '密码',
      dataIndex: 'password',
      valueType: 'password',
    },
    {
      title: '权限组',
      dataIndex: 'access',
      valueType: 'textarea',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        // eslint-disable-next-line react/jsx-key
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setStepFormValues(record);
          }}
        >修改
        </a>,
        // eslint-disable-next-line react/jsx-key
        <Divider type="vertical" />,
       
      ],
    },
  ];
  return (
   <PageContainer>
      <ProTable
        headerTitle="所有用户"
        rowKey="uid"
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 添加
          </Button>,
        ]}
        search={false}
        scroll={{ x: 'max-content' }}
        request={(params, sorter, filter) => queryUser({ ...params, sorter, filter })}
        columns={columns}
     
      />
    
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          onSubmit={async (value) => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="uid"
          type="form"
          columns={addcolumns}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);

            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}

      <Drawer
        width={600}
        visible={!!row}
        onClose={() => {
          setRow(undefined);
        }}
        closable={false}
      >
        {row?.id && (
          <ProDescriptions
            column={2}
            title={row?.uid}
            request={async () => ({
              data: row || {},
            })}
            params={{
              id: row?.uid,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
