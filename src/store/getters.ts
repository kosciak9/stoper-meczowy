const getters = {
  teamName: (state: any, getters: any) => (id: number) => {
    return state.currentMatch.teams[id].name
  }
}

export default getters
