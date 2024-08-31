import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from 'react';

type GoContextType = {
	go: boolean;
	setGo: (value: boolean) => void;
};

const GoContext = createContext<GoContextType | undefined>(undefined);

export const GoProvider = ({ children }: { children: ReactNode }) => {
	const [go, setGo] = useState<boolean>(false);

	return (
		<GoContext.Provider value={{ go, setGo }}>{children}</GoContext.Provider>
	);
};

export const useGo = () => {
	const context = useContext(GoContext);
	if (!context) {
		throw new Error("useGo must be used within a GoProvider");
	}
	return context;
};
