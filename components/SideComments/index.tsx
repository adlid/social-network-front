import React from 'react';
import {ArrowRight} from '@mui/icons-material';
import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';

export const SideComments = () => {
  return (
    <div className={clsx(styles.root)}>
      <h3 >
        Комментарии <ArrowRight />
      </h3>
      {<CommentItem/>}
    </div>
  );
};
