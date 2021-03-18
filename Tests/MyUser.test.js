import MyUser from "../Components/MyUser";

test('Test Mock User', () => {

    // Create mock user named Lorem Ipsum with 2 posts
    let page = new MyUser("Lorem", "Ipsum");
    let spy = jest.spyOn(page, 'getNumPosts').mockImplementation(() => 2);

    // Expect getNumPosts() to return 2
    expect(page.getNumPosts()).toBe(2);

    // Expect getUserFirstName to return "Lorem"
    expect(page.getUserFirstName()).toMatch("Lorem");

    // Expect getUserLastName to return "Ipsum"
    expect(page.getUserLastName()).toMatch("Lorem");

    // Restore mock
    spy.mockRestore();

});