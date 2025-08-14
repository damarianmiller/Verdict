import Button from "@/components/Button";
import Input from "../../components/Input";
const dummyProposals = [
    {
        title: 'Universal WiFi in Public Spaces',
        comments: 124,
        votes: 305,
        status: 'Trending',
    },
    {
        title: 'Free Transit for Students',
        comments: 67,
        votes: 145,
        status: 'New',
    },
    {
        title: 'More Green Spaces in Urban Areas',
        comments: 89,
        votes: 210,
        status: 'Popular',
    },
    {
        title: 'Improved Recycling Programs',
        comments: 45,
        votes: 98,
        status: 'Under Review',
    },
    {
        title: 'Community WiFi Hotspots',
        comments: 32,
        votes: 76,
        status: 'New',
    },
    {
        title: 'Bike Lanes Expansion',
        comments: 78,
        votes: 160,
        status: 'Trending',
    },
    {
        title: 'Affordable Housing Initiatives',
        comments: 50,
        votes: 120,
        status: 'New',
    },
    {
        title: 'Public Transport Improvements',
        comments: 90,
        votes: 200,
        status: 'New',
    },
    {
        title: 'Smart City Solutions',
        comments: 120,
        votes: 300,
        status: 'Trending',
    }
];




export default function ProposalsView() {
    return (
        <>
            <header>
                <div>
                    <i className="icon fa-solid fa-paper-plane"></i>
                </div>
                <hgroup>
                    <h1>Proposals</h1>
                    <h2>Here you can view and manage proposals.</h2>
                </hgroup>
            </header>
            <article className="content">
                <Input icon="search" type="search" placeholder="Search proposals..." />
                {dummyProposals.map((proposal, index) => (
                    <section key={index} className="card proposal-item">
                        <h2>{proposal.title}</h2>
                        <p>{proposal.comments} comments</p>
                        <p>{proposal.votes} votes</p>
                        <p>Status: {proposal.status}</p>
                    </section>
                ))}
            </article>
        </>
    );
}