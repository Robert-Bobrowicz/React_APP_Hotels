export default function Input(props) {
    return (
        <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={`form-control ${false ? 'is-invalid' : ''} mb-4`}
            placeholder="enter new hotel name"
        />
    )
}