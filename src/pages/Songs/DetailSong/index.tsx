import React, { useState } from 'react';
import _ from 'lodash';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Input, Table } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import ChordSheetJS from 'chordsheetjs';

export default function DetailSong() {
  const { t } = useTranslation();
  const { TextArea } = Input;
  const history = useHistory();
  const [form] = Form.useForm();

  const dataSongs = {
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
  };
  form.setFieldsValue({
    // lyrics: dataSongs?.lyric,
    song_name: dataSongs?.name,
    artist_name: dataSongs?.artistName,
    author_name: dataSongs?.author,
  });
  const a = dataSongs?.lyric.replaceAll('[', '<span>[');
  const b = a.replaceAll(']', ']</span>');

  const handleOnChange = (value: any) => {};
  const handleFinish = (values: any) => {};
  const song = new ChordSheetJS.ChordProParser().parse(dataSongs?.lyric);
  console.log('dataSongs?.lyric', dataSongs?.lyric);
  console.log(song);

  return (
    <div className={styles.listAccount}>
      <div className={styles.back}>
        <LeftOutlined onClick={() => history.push('/songs')} />
        <span>Back to list songs</span>
      </div>
      <Form
        className={styles.form}
        onValuesChange={handleOnChange}
        form={form}
        onFinish={handleFinish}>
        <Form.Item
          name="song_name"
          label="Name of song"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="artist_name"
          label="Name of artist"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="author_name"
          label="Name of author"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}>
          <Input />
        </Form.Item>
        <Form.Item
          // name="lyrics"
          label="Lyrics"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}>
          <div className={styles.textarea} id="lyrics" contentEditable="true">
            {song?.currentParagraph?.lines?.map((item: any, index: number) => {
              return (
                <div key={index} style={{ display: 'flex' }}>
                  {item?.items?.map((item1: any, index1: any) => {
                    return (
                      <div key={`${index}${index1}`} className={styles.line}>
                        {item1.chords && (
                          <span style={{ color: '#e46e62' }}>
                            &nbsp;[{item1.chords}]&nbsp;
                          </span>
                        )}
                        {item1.lyrics}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => history.push('/songs/edit')}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
