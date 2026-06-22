from dataclasses import dataclass
from pathlib import Path


@dataclass(slots=True)
class AutomationReport:
    project: str
    tasks: list[str]
    score: float = 0.0

    def markdown(self) -> str:
        items = "\n".join(f"- {task}" for task in self.tasks)
        return f"# {self.project}\n\n{items}\n"

report = AutomationReport("DevButter", ["analyze", "plan", "execute"], 0.98)
Path("report.md").write_text(report.markdown())

def test(variable: tuple, *args, **kwargs) -> None:
    ...

test(
    variable=(
        "testing",
        (
            "testing2",
            (
                "testing3"
            )
        ),
    )
)
