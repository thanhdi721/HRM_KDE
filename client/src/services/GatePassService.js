import axios from "axios";

export const createGatePass = (gatePassData) => async (dispatch) => {
    try {
        // Gửi yêu cầu tạo phiếu đến API Back-end
        const response = await axios.post('http://localhost:5000/gate-pass/create', gatePassData);
        dispatch({
            type: 'CREATE_GATE_PASS_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        console.error("Error creating gate pass:", error);
        // Xử lý lỗi nếu cần
        dispatch({
            type: 'CREATE_GATE_PASS_ERROR',
            payload: error
        });
    }
};
