import {atom} from 'jotai'

const navigation = atom<boolean>(false)
const post = atom<[]>([])
const isLoading = atom<boolean>(true)
const page = atom<number>(1)


export {navigation, post, isLoading,page}