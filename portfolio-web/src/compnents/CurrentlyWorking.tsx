
const working : string = "Engineering Brain AI v2.0: A 28-agent Polyglot Developer Swarm built on Java and Spring Boot. It autonomously handles full-cycle software development—from database design to deployment—safeguarded by strict Human-in-the-Loop oversight."

const CurrentlyWorking = () => {
    return (
        <div className="currently-working">
			<h3 className="section-label">Currently Working</h3>
        	<div className = "inside-working">
			<div className="now-dot"></div>
				<div className="active">
				<span className="now-label">Active</span>
				<p className="now-writing">{working}</p>
				</div>
			</div>
		</div>
    );
}

export default CurrentlyWorking;
