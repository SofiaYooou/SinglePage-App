import React from "react";

import { Layout } from '../layout';
const Contact = () => (
    <Layout>
        <h1 className='text-2xl p-2 text-center'>Contact Page</h1>
        <form className='flex flex-col space-y-5 w-1/2 m-auto'>
            <div className='flex flex-col text-left'>
                <label>Name:</label>
                <input className='p-2 rounded border border-purple-200' type='text' />
            </div>
            <div className='flex flex-col text-left'>
                <label>Email:</label>
                <input className='p-2 rounded border border-purple-200' type='text' />
            </div>
            <div className='flex flex-col text-left'>
                <label>Message:</label>
                <input className='p-2 rounded border border-purple-200 h-32' type='text' />
            </div>
        </form>
    </Layout>
);

export default Contact;