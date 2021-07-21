import React from 'react';

import { Message } from "./component-style";
import {Text} from "../components/text";

const UserActivate = ({tokenValid, userToken}) =>  (
    <Message>
      <Text>{tokenValid ? 'Activation token is not valid' : `Activation was successful. Congratulations ${userToken} !!!!!`}</Text>
    </Message>
  );

export default UserActivate;