

const Header = ({selectedTeam,teamMemberCount}) => {

    return (
        <header className=" container text-center">
            <h1 className="">Team Member Allocation</h1>
            <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount===1?"Member":"Members"}</h3>
        </header>
    )
}

export default Header