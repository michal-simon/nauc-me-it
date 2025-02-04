import Link from "next/link"
import { HeadingsType } from "../utils/mdx"
import { Typography } from "./Typography"

type Props = { readonly headings: HeadingsType }

export function TableOfContents({ headings }: Props) {
    return (
        <>
            {headings.map((heading) => {
                return (
                    <Typography
                        variant={heading.level === 1 ? "important" : "normal"}
                        component={Link}
                        componentProps={{ href: heading.href }}
                        key={heading.href}
                        className={`block hover:text-secondary ${heading.level === 1 ? "mt-2" : "ml-4"}`}
                    >
                        {heading.text}
                    </Typography>
                )
            })}
        </>
    )
}
