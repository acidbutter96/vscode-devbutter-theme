<?php
final class DiagnosisController
{
    public function __invoke(array $payload): array
    {
        $email = $payload['email'] ?? null;

        if (!$email) {
            throw new InvalidArgumentException('Email is required.');
        }

        return [
            'status' => 'queued',
            'message' => "Diagnosis requested for {$email}",
        ];
    }
}
