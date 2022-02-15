import React, { useState } from 'react';
import _ from 'lodash';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Input, Table } from 'antd';
import iconDeleteBlack from '../../assets/images/delete.png';
import iconEditBlack from '../../assets/images/edit.png';
import iconView from '../../assets/images/open.svg';
import DeleteSong from './DeleteSong';
import { useHistory } from 'react-router-dom';

export default function Songs() {
  const { t } = useTranslation();
  const { Search } = Input;
  const history = useHistory();
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [idPicked, setIdPicked] = useState<number>();

  const dataSongs = [
    {
      songId: '193b6a0c-255a-4cf2-b911-d33f5f765d09',
      name: 'Bài mới 1',
      lyric: 'Thắng Thêm bài mới',
      authorId: '1',
      category: null,
      status: null,
      singerId: null,
      artistName: 'Thảo Linh',
      id: '1',
      authorName: 'Hùng Trần',
      age: '23',
      author: 'Hùng Trần',
    },
    {
      songId: '447ead7c-3458-420e-a8f0-673d75696e03',
      name: 'Hà Nội Và Em',
      lyric:
        '1. Mùa xuân vừa [G]đến hoa về trên những bàn [Gm7]tay Và em vừa [C]đến thay [Am7]màu áo mới vì [Dm]anh [Gm] [A7] Nguyện cho ngày [Dm]tháng êm đềm như những sớm [Gm6]mai [A7] Những nhọc nhằn chớm [Bb]quen______ [Bdim]vẫn trong ngần mắt [E7]em [A7]Đang nhìn về [Dm]anh [C] [Bb7] [A7]2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông Một mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7] Tình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm] Giữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em Riêng chờ đợi [Dm]anh 2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông Một mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7] Tình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm] Giữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em Riêng chờ đợi [Dm]anh 2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông Một mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7] Tình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm] Giữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em Riêng chờ đợi [Dm]anh',
      authorId: '07d19532-957a-4657-a5e4-1f3a590357a9',
      category: null,
      status: null,
      singerId: null,
      artistName: 'Sơn Tùng MTP',
      id: '07d19532-957a-4657-a5e4-1f3a590357a9',
      authorName: 'Thuy Linh',
      age: null,
      author: 'Thuy Linh',
    },
    {
      songId: '82d5a4f8-9787-4f5d-8b7c-42a76838d557',
      name: 'Mưa Đêm',
      lyric:
        'Cuộc đời [C]cứ trôi, ta [E7]nhìn lại ngày tháng còn bên [Am]nhau [G], cùng những [D/F#]thăng trầm.\n[F]Tại sao không vẫy tay [C]chào nơi ta đứng bây giờ, [Dm7]hai nơi hai người [Dm7/G]dưng. \nĐợi em [C]bước qua, để [E7]khiến anh nhận ra là đôi [Am]mắt em [G]còn đang [D/F#]buồn. \n[F]Màu hoa cài áo vẫn [C]còn như lời hứa đã [Dm7]từng, giờ đây còn như [Dm7/G]xưa...[G7]\nDòng người vội vàng bước [F]qua, chợt như chiếc hôn thế [C]thôi.\nĐôi môi chia làm [E7]đôi như ta đang mong vậy [Am]thôi [G]\nNgười nghẹn ngào bước [F]đi, chợt như chúng ta quay [C]về \nGiấu trái tim [E7]mình và đừng thổn thức khi thấy [Am]nhau [G]\nĐoàn tàu [F]kia dừng lại, còn [Fm]hai ta, bước qua [C]nhau\nBRIDGE:\nTrôi đi theo mây [Em]trời \nTừng cảm [Am]xúc trong tim anh đang [G]cô đơn cùng [F]với ngàn lời\nViết riêng cho bài [Em]ca tình đầu \nChỉ còn [Fm]lại một thói quen từ [G]lâu',
      authorId: '07d19532-957a-4657-a5e4-1f3a590357a9',
      category: null,
      status: null,
      singerId: null,
      artistName: null,
      id: '07d19532-957a-4657-a5e4-1f3a590357a9',
      authorName: 'Thuy Linh',
      age: null,
      author: 'Thuy Linh',
    },
    {
      songId: '90769586-583d-428b-b352-e0a7409712da',
      name: 'Yêu là cưới',
      lyric:
        'Đếm bao ngày [F]xuân đi qua xin phép gia [G]đình mẹ cha \nCho rước em [Em]về làm dâu hai đứa sau [Am]này làm giàu.\nKéo theo đàn [F]trai bưng mâm coi bói ngay [G]ngày 25 \nNàng ơi anh [Em]tới anh đón em về kết tình trăm [Am]năm.\n \n[F]Đêm nằm mơ [G]ngày làm thơ \n[Em]Thương rồi nhớ mà cớ sao [Am]lòng thẫn thờ\n[F]Yêu là cưới trên dưới hai [G]nhà làm sui\nRượu bia chơi [Em]láng 9 tháng 10 ngày có cục cưng [Am]nuôi.\n \n[F]Tình mặn nồng [G]yêu đậm sâu\nCó đứt tơ [Em]hồng thì cũng không làm cho ta [Am]xa cách nhau \n[F]Em trồng rau [G]anh cắm câu\nTính toán trong [Em]đầu nhất quyết đón em về làm [Am]dâu.',
      authorId: '07d19532-957a-4657-a5e4-1f3a590357a9',
      category: null,
      status: null,
      singerId: null,
      artistName: null,
      id: '07d19532-957a-4657-a5e4-1f3a590357a9',
      authorName: 'Thuy Linh',
      age: null,
      author: 'Thuy Linh',
    },
    {
      songId: 'c5ec808b-1557-4f10-a413-0ee5aeacb50c',
      name: 'Hà Nội Và Em',
      lyric:
        '2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông Một mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7] Tình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm] Giữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em Riêng chờ đợi [Dm]anh\n2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông Một mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7] Tình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm] Giữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em Riêng chờ đợi [Dm]anh\n2. Và anh lại [Dm]nhớ những giờ em đứng chờ [Gm7]trông\nMột mình lặng [C]lẽ ướt [A7]lạnh trong mưa vì [Dm]anh [Gm] [A7]\nTình yêu tìm [Dm]thấy nguyên vẹn trong đêm bão [G]giông [Gm]\nGiữa hoang tàn lãng [Dm]quên____ [Bdim]nơi cuối đường có [A7]em\nRiêng chờ đợi [Dm]anh',
      authorId: '07d19532-957a-4657-a5e4-1f3a590357a9',
      category: null,
      status: null,
      singerId: null,
      artistName: null,
      id: '07d19532-957a-4657-a5e4-1f3a590357a9',
      authorName: 'Thuy Linh',
      age: null,
      author: 'Thuy Linh',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'artistName',
      dataIndex: 'artistName',
      key: 'artistName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: any, record: any) => (
        <label className={`switch`}>
          <Checkbox className={`checkbox-custom`}>
            <span className={`slider`}></span>
          </Checkbox>
        </label>
      ),
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
              onClick={() => history.push(`/song/detail/${record.id}`)}>
              <img src={iconView} alt="" />
            </Button>
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

  // const b = JSON.parse(a);
  // console.log(b);
  return (
    <div className={styles.listAccount}>
      <div className={styles.search}>
        <Search
          placeholder="input search text"
          enterButton
          className={styles.searchInput}
        />
        <Button
          className={styles.btnAdd}
          onClick={() => history.push('/song/add')}>
          Add
        </Button>
      </div>
      <Table dataSource={dataSongs} columns={columns} />
      <DeleteSong
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        idPicked={idPicked}
      />
    </div>
  );
}
