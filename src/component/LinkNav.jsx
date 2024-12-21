'use client'
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap'; // Importing react-bootstrap components
import { FaTachometerAlt, FaBook, FaChartBar, FaSearch } from "react-icons/fa"; // Importing relevant icons from react-icons
import Link from "next/link";
const LinkNav = () => {
    const { user } = useUser();
    const [role, setRole] = useState("user"); // Default role is "user"

    useEffect(() => {
        if (user?.publicMetadata?.role) {
            setRole(user.publicMetadata.role); // Set the role from user metadata
        }
    }, [user]); // Only rerun when user changes

    return (
        <>
            <ListGroup>
                {/* Conditional rendering based on the user's role */}
                {role === "teacher" ? (
                    <>
                        <ListGroup.Item>
                            <Link href="/teacher/create">
                                <FaBook className="me-2" /> Courses
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="#">
                                <FaChartBar className="me-2" /> Analytics
                            </Link>
                        </ListGroup.Item>
                    </>
                ) : (
                    <>
                        <ListGroup.Item>
                            <Link href="#">
                                <FaTachometerAlt className="me-2" /> Dashboard
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="#">
                                <FaSearch className="me-2" /> Browse
                            </Link>
                        </ListGroup.Item>
                    </>
                )}
            </ListGroup>
        </>
    );
}

export default LinkNav;
