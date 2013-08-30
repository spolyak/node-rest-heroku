CREATE TABLE event (
    id bigserial primary key,
    name varchar(20) NOT NULL,
    description text NOT NULL,
    date_added timestamp default NULL
);