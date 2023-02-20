import {atom} from 'jotai'

const navigation = atom<boolean>(false)
const post = atom<[]>([])
const isLoading = atom<boolean>(true)
const page = atom<number>(1)
const mail = atom({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  
export {navigation, post, isLoading, page, mail}