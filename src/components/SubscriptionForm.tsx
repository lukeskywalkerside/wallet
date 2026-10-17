import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionButton from './ActionButton.tsx'
import EmailInput from './EmailInput.tsx'


// Component

        function SubscriptionForm({
            placeholder = "Enter your email address",
            buttonLabel = "Subscribe",
            disclaimer = "We'll only use your email to send information about Exodus. You can unsubscribe at any time."
        }: {
            placeholder?: string;
            buttonLabel?: string;
            disclaimer?: string;
        }) {
            return (
                <form
                    className={"flex flex-col gap-y-2 lg:px-7"}
                    noValidate={""}
                >
                    <div
                        className={"relative flex mx-12 h-12 bg-white/24 px-3 py-1 transition-colors sm:mx-0 rounded-[2px] border border-transparent text-base leading-none focus-within:ring-0 focus-within:!ring-white focus-within:ring-opacity-0 focus-within:!ring-offset-white/8 focus-within:border-white/32"}
                    >
                        <EmailInput placeholder={placeholder} />
                    </div>

                    <ActionButton
                        variant="subscribe"
                        label={buttonLabel}
                    />

                    <p
                        className={"text-[12px] font-normal leading-[160%] tracking-[0.01em] opacity-32"}
                    >
                        {disclaimer}
                    </p>
                </form>
            );
        }
    

export default SubscriptionForm
