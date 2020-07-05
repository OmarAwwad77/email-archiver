import React, { Dispatch, SetStateAction } from 'react';

export type OrderBy = 'to' | 'from' | 'subject' | 'date';

export interface OrderContextType {
	orderBy: OrderBy;
	setOrderBy: Dispatch<SetStateAction<OrderBy>>;
}

const OrderContext = React.createContext<OrderContextType>({
	orderBy: 'date',
	setOrderBy: () => {},
});

export default OrderContext;
