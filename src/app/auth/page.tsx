import ButtonCn from "@/components/global/Form/ButtonCn";

const Auth = () => {
    return (
        <div className="w-full shadow-md shadow-gray-300 p-7 rounded-md">
            <div className="mb-7 text-center">
                <h3 className="text-lg font-extrabold">Welcome To Jeelcious Store</h3>
                <p className="text-[0.85rem] text-dark-secondary">Please select the button below to continue your shopping process.</p>
            </div>
            <div className="flex flex-col gap-y-3">
                 <ButtonCn title="Sign In" type="button" loading={false} isPrimary={true} isFullWidth={true} mode="dark" variant="default" size="sm" />
            <ButtonCn title="Sign Up" type="button" loading={false} isPrimary={true} isFullWidth={true} mode="dark" variant="outline" size="sm" />
            </div>
        </div>
    )
}

export default Auth;