import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

const TravelerForm = (touch,errors, status) => {
    const [traveler, setTraveler] = useState({});
    useEffect(() => {
        status && setTraveler(status);
      }, [status]);
}

