import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
	isMobile: boolean,
	isScrolled: boolean,
	isDesktop: boolean
};

const initialState: UIState = {
	isMobile: false,
	isScrolled: false,
	isDesktop: false
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setIsMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
		setIsScrolled: (state, action: PayloadAction<boolean>) => {
			state.isScrolled = action.payload;
		},
		setIsDesktop: (state, action: PayloadAction<boolean>) => {
			state.isDesktop = action.payload;
		}
	}
});

export const { setIsMobile, setIsScrolled, setIsDesktop } = uiSlice.actions;
export default uiSlice.reducer;