type TDataDob = {
  date: string
  age: number
}

type TDataId = {
  name: string
  value: string
}
type TDataCoordinates = {
  latitude: string
  longitude: string
}

type TDataStreet = {
  number: number
  name: string
}

type TDataTimezone = {
  offset: string
  description: string
}

type TDataLocation = {
  city: string
  coordinates: TDataCoordinates
  country: string
  postcode: number
  state: string
  street: TDataStreet
  timezone: TDataTimezone
}

type TDataLogin = {
  md5: string
  password: string
  salt: string
  sha1: string
  sha256: string
  username: string
  uuid: string
}

type TDataName = {
  title: string
  first: string
  last: string
}

type TDataPicture = {
  large: string
  medium: string
  thumbnail: string
}

type TDataRegistered = {
  age: number
  date: string
}

export type TData = {
  cell: string
  dob: TDataDob
  email: string
  gender: string
  id: TDataId
  location: TDataLocation
  login: TDataLogin
  name: TDataName
  nat: string
  phone: string
  picture: TDataPicture
  registered: TDataRegistered
  lenght: void
}

export type TDataRandomPersonGenerator = {
  [x: string]: any
  [key:number]:TData
}