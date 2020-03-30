import React from 'react';
import { render, act } from '@testing-library/react';
import axiosMock from 'axios';
import App from '../App';

jest.mock('axios');

test('fetches posts from /reddit/hot on first render', () => {
	axiosMock.get.mockResolvedValueOnce({
		data: { children: [] },
	});
	act(() => {
		render(<App />);
	});
	expect(axiosMock.get).toHaveBeenCalledTimes(1);
	expect(axiosMock.get).toHaveBeenCalledWith(
		'/reddit/hot',
		expect.anything(),
		expect.anything()
	);
});
