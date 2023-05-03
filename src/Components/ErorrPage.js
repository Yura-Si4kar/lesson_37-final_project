import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrors } from '../store/selectors/selectors';
import { removeError } from '../store/actions/servicesActions';

export default function ErrorPage() {
    const dispatch = useDispatch();
    const errors = useSelector(selectErrors);

    useEffect(() => {
        const storedErrors = localStorage.getItem('errors');
        if (storedErrors) {
            dispatch({ type: 'SET_ERRORS', errors: JSON.parse(storedErrors) });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('errors', JSON.stringify(errors));
    }, [errors]);

    return (
    <div>
        {errors.length > 0 ? (
        <ul>
            {errors.map((error, index) => (
            <li key={index}>
                {error.message}{' '}
                <button onClick={() => dispatch(removeError(index))}>x</button>
            </li>
            ))}
        </ul>
        ) : (
        <p>No errors.</p>
        )}
    </div>
    );
}