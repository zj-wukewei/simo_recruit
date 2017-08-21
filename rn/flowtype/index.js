/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */


export type Response = {
  data: SimoResponse,
  status: number,
  statusText: string
};
export type SimoResponse = {
  statusCode: number,
  statusMessage: string,
  data: Object,
  time: number
};

export type ProjectEntity = {
  project_id: string,
  sickness_name: string,
  sickness_type: string,
  experiment_title: string,
  bid_name: string,
  drug_name: string,
  sickness_status: boolean
};