import {ObjectId} from 'mongodb';

/** 投票.
 * 投票時刻は_idに格納されるからまあいいか
 */
export interface Vote {
    _id: ObjectId;
    by_name: string;
    target_name: string;
};