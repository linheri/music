import React, { useState } from 'react';
import _ from 'lodash';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Input, Table } from 'antd';
import iconDeleteBlack from '../../assets/images/delete.png';
import iconEditBlack from '../../assets/images/edit.png';

export default function DetailSong() {
  const { t } = useTranslation();
  const { TextArea } = Input;

  return (
    <div className={styles.listAccount}>
      <Form>
        <Form.Item name="lyrics" label="Lyrics">
          <TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
