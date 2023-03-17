import { atom } from "recoil";

export const modalState = atom({
    key: 'show',
    default: false,
});
export const updateState = atom({
    key: "Update",
    default:{ id:"", title:"", description:""},
})


export const currentProjectState = atom({
    key: "currentProjectState",
    default:{ id:"", title:"", description:"", budget:""},
})

