CREATE TABLE user_list_element (
    id SERIAL PRIMARY KEY,
    value character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
)
