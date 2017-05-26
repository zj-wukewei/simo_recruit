/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */


export type Response = {
    data : PetLoverResponse,
    status : number,
    statusText : string
};
export type SimoResponse = {
    statusCode : number,
    statusMessage : string,
    data : Object,
    time : number
};