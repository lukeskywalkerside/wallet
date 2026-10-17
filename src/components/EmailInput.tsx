import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function EmailInput({
            placeholder = "Enter your email address"
        }: {
            placeholder?: string;
        }) {
            return (
                <input
                    autoComplete={"off"}
                    className={"w-full border outline-none transition-colors [&:-webkit-autofill]:!bg-transparent [&:-webkit-autofill]:!text-white [&:-webkit-autofill]:![-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_transparent] [&:-webkit-autofill]:transition-[background-color,box-shadow] [&:-webkit-autofill]:duration-[5000s] [&:-webkit-autofill]:delay-[0s] border-none bg-transparent text-center placeholder:text-white/50 placeholder:transition-colors focus:placeholder:text-white/24"}
                    placeholder={placeholder}
                    type={"email"}
                    name={"email"}
                />
            );
        }
    

export default EmailInput
