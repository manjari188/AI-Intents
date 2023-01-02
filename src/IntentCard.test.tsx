import {cleanup, render, screen, getByText, fireEvent} from '@testing-library/react';
import IntentCard from './IntentCard';

// Mock data
const intentData = {
    "id": "34d7831e137a4016a55f98926800a643",
    "name": "Greeting",
    "description": "The visitor says hello.",
    "trainingData": {
      "expressionCount":145,
      "expressions": [
        {
          "id": "6399fd6989984c7b871c6301744b0af5",
          "text": "Hello"
        },
        {
          "id": "68bafebc2a2e4843a56a221c2ceb12ed",
          "text": "Hi"
        },
        {
          "id": "b2a3208dc801432992812638368e0668",
          "text": "Good morning!"
        }
      ]
    },
    "reply": {
      "id": "f35d7e0936a44102bac9cb96c81eec3b",
      "text": "Hello :) How can I help you?"
    }
}

// Unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

beforeEach (() => {
    const rendered = render(<IntentCard intent={intentData} selectIntent={jest.fn()}/>);
})

test('renders learn react link', () => {
    expect(screen.getByText('Training Expressions')).toBeInTheDocument();
    expect(screen.getByText('Reply')).toBeInTheDocument();
});

test('check card selection', () => {
    render(<IntentCard intent={intentData} selectIntent={jest.fn()}/>);
    const addButton = screen.getAllByTestId('add-button');
    expect(addButton[0]).toBeInTheDocument();
    fireEvent.click(addButton[0]);
    const removeButton = screen.getAllByTestId('remove-button');
    expect(removeButton[0]).toBeInTheDocument();
});