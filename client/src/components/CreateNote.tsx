import { Button } from "./Button"

export const CreateNote = () => {
    return (
        <form className="">
            <input className="border py-1 px-2 mb-2 w-full outline-0" type="text" placeholder="Введите секст записи" />
            <Button props={['пост', 'пост']}/>
        </form>
    )
}