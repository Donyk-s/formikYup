export const registerForm = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="name">
        {' '}
        <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        <input type="text" name="password" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
