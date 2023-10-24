import axios from "axios";

export const createGatePass = (gatePassData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/gate-pass/create', gatePassData);
        dispatch({
            type: 'CREATE_GATE_PASS_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        console.error("Error creating gate pass:", error);
        dispatch({
            type: 'CREATE_GATE_PASS_ERROR',
            payload: error
        });
    }
};


export const getPendingGatePasses = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/gate-pass/get-list-pending`);
    return response.data.data; 
  } catch (error) {
    console.error("Error getting pending gate passes:", error);
    throw error;
  }
};

export const updateGatePass = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:5000/gate-pass/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating gate pass:", error);
    throw error;
  }
};

  export const deleteGatePass = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/gate-pass/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting gate pass:", error);
      throw error;
    }
  };
