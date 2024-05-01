import TypewriteTitle from "@/components/TypewriteTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="whitespace-normal">
        <h1 className="text-center font-regular text-5xl">
          Welcome
          to {" "}
          <span className="text-green-600 font-semibold ">
            DVAPI
          </span>
        </h1>

        <div className="mt-4">
          <h2 className="text-center text-slate-700  text-3xl font-regular m-5 p-5">
            <TypewriteTitle />
          </h2>

          <div className="flex flex-col gap-4 px-32 py-5 justify-center items-center text-center">
            "Unlock the full potential of your APIs with peace of mind
            - Welcome to DVAPI, where security is our top priority."

            <div>
              DVAPI is a valuable platform for developers and security professionals who are interested in exploring and addressing API vulnerabilities.


              By leveraging these resources, users can stay up-to-date with the latest API security trends and take proactive steps to secure their APIs against potential threats. Through regular testing and analysis, users can ensure that their APIs remain secure and protected against evolving threats.
            </div>

          </div>

          <div className="flex justify-center items-center text-gray-500 underline">
            <a href="https://southern-dodo-d15.notion.site/How-to-pull-and-run-DVAPI-Docker-Image-3711b4e4d12f42469e10f1287f894546" target="_blank">

            Read this setup guide for setting up DVAPI backend!

            </a>
            
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/dashboard">
              <Button className="bg-green-600">
                Get Started <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
              </Button>
            </Link>
          </div>



        </div>

      </div>
    </div>
  )
}
