import { Button } from "./Button"

export const CreateNote = () => {
    return (
        <form>
            <input className="border py-2 px-4 mb-2" type="text" placeholder="Введите секст записи" />
            <Button props={['пост', 'пост']}/>
        </form>
    )
}