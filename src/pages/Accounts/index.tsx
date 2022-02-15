import React from 'react';
import _ from 'lodash';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Checkbox, Input, Table } from 'antd';

export default function Accounts() {
  const { t } = useTranslation();
  const { Search } = Input;
  const dataAccount = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => (
        <label className={`switch`}>
          <Checkbox className={`checkbox-custom`}>
            <span className={`slider`}></span>
          </Checkbox>
        </label>
      ),
    },
  ];

  return (
    <div className={styles.listAccount}>
      <div className={styles.search}>
        <Search
          placeholder="input search text"
          enterButton
          className={styles.searchInput}
        />
      </div>
      <Table dataSource={dataAccount} columns={columns} />;
    </div>
  );
}
