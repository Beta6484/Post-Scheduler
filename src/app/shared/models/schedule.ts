export interface Schedule {
  id?: number,
  social_network_key: number[],
  socialNetworks?: object[],
  publication_date: string,
  text: string,
  media: string,
  status?: object,
  status_key?: number
}
