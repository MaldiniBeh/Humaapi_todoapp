module.exports = () => {
    const data = { users: [] }
    // Create 50 users
    for (let i = 0; i < 50; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    return data
  }