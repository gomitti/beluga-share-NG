/**
 * mongoのコレクション構造
 */
import {ObjectId} from 'mongodb';

export const DBNAME:string = 'ng';

/** 投票
 * 投票時刻は_idに格納されるからまあいいか
 */
export interface Vote {
    _id: ObjectId;
    by_name: string;
    target_name: string;
};

/** ユーザのスコア
 */
export interface User{
    _id:ObjectId;
};