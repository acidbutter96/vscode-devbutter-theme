import Foundation

struct FocusBlock: Identifiable {
    let id = UUID()
    let title: String
    let startsAt: Date
    let duration: TimeInterval
}

func schedule(_ block: FocusBlock) async throws {
    print("Scheduling \(block.title)")
}
