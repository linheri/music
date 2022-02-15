import React, { useState } from 'react';
import _ from 'lodash';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Input, Table } from 'antd';
import iconDeleteBlack from '../../assets/images/delete.png';
import iconEditBlack from '../../assets/images/edit.png';
import DeleteSong from './DeleteSong';
import { useHistory } from 'react-router-dom';

export default function Songs() {
  const { t } = useTranslation();
  const { Search } = Input;
  const history = useHistory();
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [idPicked, setIdPicked] = useState<number>();
  const dataAccount = [
    {
      key: '1',
      id: 1,
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      id: 2,
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
      title: '',
      dataIndex: '',
      key: '',
      render: (text: any, record: any) => {
        console.log(record, text);
        return (
          <div className={styles.btnGroup}>
            <Button
              className={`${styles.btnAction}`}
              onClick={() => history.push(`/song/edit/${record.id}`)}>
              <img src={iconEditBlack} alt="" />
            </Button>
            <Button
              className={`${styles.btnAction}`}
              onClick={() => deleteSong(record.id)}>
              <img src={iconDeleteBlack} alt="" />
            </Button>
          </div>
        );
      },
    },
  ];
  const deleteSong = (id: number) => {
    setDeleteStatus(true);
    setIdPicked(id);
  };

  return (
    <div className={styles.listAccount}>
      <div className={styles.search}>
        <Search
          placeholder="input search text"
          enterButton
          className={styles.searchInput}
        />
        <Button className={styles.btnAdd}>Add</Button>
      </div>
      <Table dataSource={dataAccount} columns={columns} />
      <DeleteSong
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        idPicked={idPicked}
      />
    </div>
  );
}
