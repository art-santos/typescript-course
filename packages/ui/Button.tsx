import * as React from 'react';
export const Button = (props:any) => {
 return <button className="rounded-full w-96 h-12 bg-blue-500">{props.title}</button>;
};