type AgentStatus = "idle" | "running" | "failed";

interface AgentCardProps {
    name: string;
    status: AgentStatus;
    tasksCompleted: number;
}

export function AgentCard({ name, status, tasksCompleted }: AgentCardProps) {
    const isRunning = status === "running";

    return (
        <article data-running={isRunning}>
            <h2>{name}</h2>
            <p>Completed: {tasksCompleted}</p>
        </article>
    );
}
