CREATE TABLE agents (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  enabled BOOLEAN DEFAULT TRUE
);

SELECT name FROM agents WHERE enabled = TRUE ORDER BY name;
