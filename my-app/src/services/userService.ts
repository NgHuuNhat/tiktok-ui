import api from "../utils/api"

//search //tìm kiếm user
export const searchUsers = async (value: string) => {
    try {
        const res = await api.get('/users/search', {
            params: { q: value, type: 'less' },
        })
        return res.data.data
    } catch (error) {
        return []
    }
}

//get //lay danh sach user
//post //tao moi user
//put //chinh sua user
//delete //xoa user